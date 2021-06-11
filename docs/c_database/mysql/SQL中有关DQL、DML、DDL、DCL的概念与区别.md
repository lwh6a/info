# SQL中有关DQL、DML、DDL、DCL的概念与区别

SQL(Structure Query Language)结构化查询语言是数据库的核心语言，是高级的非过程化编程语言。它功能强大，效率高，简单易学易维护。SQL语言基本上独立于数据库本身、使用的机器、网络、操作系统，基于SQL的DBMS产品可以运行在从个人机、工作站到基于局域网、小型机和大型机的各种计算机系统上，具有良好的可移植性。

SQL结构化查询语言包含6个部分

1.数据查询语言（DQL: Data Query Language）

数据检索语句，用于从表中获取数据。通常最常用的为保留字SELECT,并且常与FROM子句、WHERE子句组成查询SQL查询语句。

语法：

    SELECT <字段名> FROM <表或视图名> WHERE <查询条件>;

2.数据操纵语言（DML：Data Manipulation Language）

主要用来对数据库的数据进行一些操作，常用的就是INSERT、UPDATE、DELETE。

语法：

    INSERT INTO <表名>(列1,列2,...) VALUES (值1,值2,...);
    
    UPDATE <表名> SET <列名>=新值 WHERE <列名>=某值;
    
    DELETE FROM <表名> WHERE <列名>=某值;

3.事务处理语言（DPL）

事务处理语句能确保被DML语句影响的表的所有行及时得以更新。TPL语句包括BEGIN TRANSACTION、COMMIT和ROLLBACK。

4.数据控制语言（DCL）

通过GRANT和REVOKE，确定单个用户或用户组对数据库对象的访问权限。

5.数据定义语言（DDL）

常用的有CREATE和DROP，用于在数据库中创建新表或删除表，以及为表加入索引等。

6.指针控制语言（CCL）

它的语句，想DECLARE CURSOR、FETCH INTO和UPDATE WHERE CURRENT用于对一个或多个表单独行的操作。



注：

   SQL是一个标准，每个数据库服务器都在标准的基础上进行了相应的调整和扩展，相应的，每个数据库对数据的各种操作语言的语法就会做出相应的调整。在MySQL中，SQL通常分为DDL、DML和查询，还包括一些其它语句类别。MySQL将SELECT与INSERT、UPDATE、DELETE分别划分到了查询和DML，但是也并非绝对的划分，通常会将SELECT与INSERT、UPDATE、DELETE一起划分为DML。具体参见MySQL官网中的MySQL Glossary，其中对SQL和DML的释义分别如下：


