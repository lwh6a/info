(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{385:function(t,a,e){"use strict";e.r(a);var n=e(25),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"setbeanname-实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setbeanname-实现"}},[t._v("#")]),t._v(" setBeanName 实现")]),t._v(" "),e("p",[t._v("如果这个 Bean 已经实现了 BeanNameAware 接口,会调用它实现的 setBeanName(String)")]),t._v(" "),e("p",[t._v("方法,此处传递的就是 Spring 配置文件中 Bean 的 id 值")]),t._v(" "),e("h3",{attrs:{id:"beanfactoryaware-实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beanfactoryaware-实现"}},[t._v("#")]),t._v(" BeanFactoryAware 实现")]),t._v(" "),e("p",[t._v("如果这个 Bean 已经实现了 BeanFactoryAware 接口,会调用它实现的 setBeanFactory,\nsetBeanFactory(BeanFactory)传递的是 Spring 工厂自身(可以用这个方式来获取其它 Bean,\n只需在 Spring 配置文件中配置一个普通的 Bean 就可以)。")]),t._v(" "),e("h3",{attrs:{id:"applicationcontextaware-实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#applicationcontextaware-实现"}},[t._v("#")]),t._v(" ApplicationContextAware 实现")]),t._v(" "),e("p",[t._v("如果这个 Bean 已经实现了 ApplicationContextAware 接口,会调用\nsetApplicationContext(ApplicationContext)方法,传入 Spring 上下文(同样这个方式也\n可以实现步骤 BeanFactoryAware 的内容,但比 BeanFactoryAware更好,因为 ApplicationContext 是 BeanFactory 的子接口,有更多的实现方法)")]),t._v(" "),e("h3",{attrs:{id:"postprocessbeforeinitialization-接口实现-初始化预处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postprocessbeforeinitialization-接口实现-初始化预处理"}},[t._v("#")]),t._v(" postProcessBeforeInitialization 接口实现 - 初始化预处理")]),t._v(" "),e("p",[t._v("如果这个 Bean 关联了 BeanPostProcessor 接口,将会调用\npostProcessBeforeInitialization(Object obj, String s)方法,BeanPostProcessor 经常被用\n作是 Bean 内容的更改,并且由于这个是在 Bean 初始化结束时调用那个的方法,也可以被应\n用于内存或缓存技术。")]),t._v(" "),e("h3",{attrs:{id:"init-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init-method"}},[t._v("#")]),t._v(" init-method")]),t._v(" "),e("p",[t._v("如果 Bean 在 Spring 配置文件中配置了 init-method 属性会自动调用其配置的初始化方法。")]),t._v(" "),e("h3",{attrs:{id:"postprocessafterinitialization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postprocessafterinitialization"}},[t._v("#")]),t._v(" postProcessAfterInitialization")]),t._v(" "),e("p",[t._v("如果这个 Bean 关联了 BeanPostProcessor 接口,将会调用\npostProcessAfterInitialization(Object obj, String s)方法。\n注:以上工作完成以后就可以应用这个 Bean 了,那这个 Bean 是一个 Singleton 的,所以一\n般情况下我们调用同一个 id 的 Bean 会是在内容地址相同的实例,当然在 Spring 配置文件中\n也可以配置非 Singleton。")]),t._v(" "),e("h3",{attrs:{id:"destroy-过期自动清理阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destroy-过期自动清理阶段"}},[t._v("#")]),t._v(" Destroy 过期自动清理阶段")]),t._v(" "),e("p",[t._v("当 Bean 不再需要时,会经过清理阶段,如果 Bean 实现了 DisposableBean 这个接口,会调\n用那个其实现的 destroy()方法;")]),t._v(" "),e("h3",{attrs:{id:"destroy-method-自配置清理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destroy-method-自配置清理"}},[t._v("#")]),t._v(" destroy-method 自配置清理")]),t._v(" "),e("p",[t._v("最后,如果这个 Bean 的 Spring 配置中配置了 destroy-method 属性,会自动调用其配置的")]),t._v(" "),e("p",[t._v("销毁方法。")])])}),[],!1,null,null,null);a.default=r.exports}}]);