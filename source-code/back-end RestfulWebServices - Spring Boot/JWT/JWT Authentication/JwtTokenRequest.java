package com.pvsnpexchange.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwdnNucGV4Y2hhbmdlIiwiZXhwIjoxNjQ1MzQ0NzYzLCJpYXQiOjE2NDQ3Mzk5NjN9.FjAjGCFLpblhaKvqDD2xi8LqjL4GJyxuqFfGp9z3jXQ_sj5gN1nWVQjIh9M-QirJMyCLFDZPTqEQJAW1x10piQ"
//    }


    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

