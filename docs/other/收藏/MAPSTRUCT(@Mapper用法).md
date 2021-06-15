# MAPSTRUCT(@Mapper用法)

官网地址：http://mapstruct.org/
MapStruct是一个代码生成器，简化了不同的Java Bean之间映射的处理，所以映射指的就是从一个实体变化成一个实体。例如我们在实际开发中，DAO层的实体和一些数据传输对象(DTO)，大部分属性都是相同的，只有少部分的不同，通过mapStruct，可以让不同实体之间的转换变的简单。我们只需要按照约定的方式进行配置即可。
MapStruct是一个可以处理注解的Java编译器插件，可以在命令行中使用，也可以在IDE中使用。MapStruct有一些默认配置，但是也为用户提供了自己进行配置的途径。
**1 开发环境搭建–基于Maven**
MapStruct主要由两部分组成：
org.mapstruct:mapstruct：包含了一些必要的注解，例如@Mapping。我们使用的JDK版本高于1.8，当我们在pom里面导入依赖时候，建议使用坐标是：org.mapstruct:mapstruct-jdk8，这可以帮助我们利用一些Java8的新特性。
**org.mapstruct:mapstruct-processor**：注解处理器，根据注解自动生成mapper的实现。

```java
...
<properties>
    <org.mapstruct.version>1.1.0.Beta1</org.mapstruct.version></properties>
...
<dependencies>
    <dependency>
        <groupId>org.mapstruct</groupId>
        <artifactId>mapstruct-jdk8</artifactId>
        <version>${org.mapstruct.version}</version>
    </dependency>
    <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>
 </dependencies>
...
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.5.1</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
                <annotationProcessorPaths>
                    <path>
                        <groupId>org.mapstruct</groupId>
                        <artifactId>mapstruct-processor</artifactId>
                        <version>${org.mapstruct.version}</version>
                    </path>
                </annotationProcessorPaths>
            </configuration>
        </plugin>
    </plugins></build>
...
12345678910111213141516171819202122232425262728293031323334353637
```

**2 MapStruct2分钟入门**

下面的代码演示了如何使用Map Struct实现Java Bean之间的映射。假设我们有一个表示汽车的类Car，并且还有一个数据传输对象(DTO)CarDTO。
这两个类非常相似，只是表示作为数量的属性名称是不同的并且，在Car对象中，表示汽车类型的字段是一个枚举，而在CarDTO中，直接使用字符串表示。
Car.java

```java
public class Car {
    private String make;
    private int numberOfSeats;
    private CarType type;
    //constructor, getters, setters etc.
    }
    
  static enum CarType {
    SEDAN
}
12345678910
```

CarDTO.java

```java
public class CarDto {
 
    private String make;
    private int seatCount;
    private String type;
 
    //constructor, getters, setters etc.
}
12345678
```

**2.1 Mapper接口**
要生成一个CarDTO与Car对象相互转换的映射器，我们需要定义一个mapper接口。
CarMapper.java

```java
@Mapper 1
public interface CarMapper {
 
    CarMapper INSTANCE = Mappers.getMapper( CarMapper.class ); 3
 
    @Mapping(source = "numberOfSeats", target = "seatCount")
    CarDto carToCarDto(Car car); 2
}
12345678
```

1、@Mapper注解标记这个接口作为一个映射接口，并且是编译时MapStruct处理器的入口。

2、真正实现映射的方法需要源对象作为参数，并返回目标对象。映射方法的名字是随意的。对于在源对象和目标对象中，属性名字不同的情况，可以通过@Mapping注解来配置这些名字。我们也可以将源类型与目标类型中类型不同的参数进行转换，在这里就是通过type属性将枚举类型转换为一个字符串。当然在一个接口里可以定义多个映射方法。MapStruct都会为其生成一个实现。

3、自动生成的接口的实现可以通过Mapper的class对象获取。按照惯例，接口中会声明一个成员变量INSTANCE，从而让客户端可以访问Mapper接口的实现。

**2.2 编译**

因为MapStruct是以Java编译器插件的形式来处理注解，生成mapper接口的实现。因此在使用之前我们必须手工的编译(IDE的自动编译功能不会使用到MapStruct这个插件功能)。

执行maven命令：`mvn compile`
可以看到在target目录来多个一个类CarMapperImpl.class，如下图所示：![在这里插入图片描述](https://img-blog.csdnimg.cn/20191203174506749.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDU5MTg0,size_16,color_FFFFFF,t_70)
这个类实际上就是map struct插件自动帮助我们根据CarMapper接口生成的实现类。我们可以通过IDE的反编译功能查看自动生成的实现类的源码，如下图所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191203174533313.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDU5MTg0,size_16,color_FFFFFF,t_70)
通过反编译的源码，我们可以看出，对于属性名称不同的情况(seatCount与numberOfSeats)、以及属性类型不同(枚举类型的type与字符串类型的type)都自动帮助我们转换了。对于属性名称不同的转换，我们是通过在@Mapping注解指定的，而不同属性类型的转换，这是MapStruct的默认配置。个人感觉这个很好，很强大。

**2.3 使用Mapper**

CarMapperTest.java

```java
public class CarMapperTest {
    @Test
    public void shouldMapCarToDto() {
//given
        Car car = new Car( "Morris", 5, CarType.SEDAN );
 
//when
        CarDto carDto = CarMapper.INSTANCE.carToCarDto( car );
 
//then
        Assert.assertNotNull(carDto);
        Assert.assertEquals(carDto.getMake(),"Morris");
        Assert.assertEquals(carDto.getSeatCount() ,5);
        Assert.assertEquals(carDto.getType() ,"SEDAN");
    }
 
}
1234567891011121314151617
```

运行这个单元测试，如果没有报错的话，就说明我们已经成功运行这个案例了！关于@Mapper的用法详细见：

## [下一节](https://blog.csdn.net/qq_43459184/article/details/103372901)