package com.pvsnpexchange.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.pvsnpexchange.rest.basic.auth.AuthenticationBean;

//Controller

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
	return "Hello World"; 
}
	
	
	//hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public AuthenticationBean helloWorldBean() {
//		throw new RuntimeException("Some Error Occured! Contact Support");
	return new AuthenticationBean( "Hello World - Changed");
} 
	
	//-> /hello-world/path-variable/pvsnpexchange
		@GetMapping(path = "/hello-world/path-variable/{name}")
		public AuthenticationBean helloWorldPathVariable(@PathVariable String name) {
		return new AuthenticationBean(String.format("Hello, %s", name));
	} 

}
