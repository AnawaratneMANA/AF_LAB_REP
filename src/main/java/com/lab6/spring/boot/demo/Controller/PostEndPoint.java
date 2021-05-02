package com.lab6.spring.boot.demo.Controller;

import com.lab6.spring.boot.demo.api.PostApi;
import com.lab6.spring.boot.demo.domain.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostEndPoint {

    private final PostApi postApi;

    @Autowired
    public PostEndPoint (PostApi postApi){
        this.postApi = postApi;
    }

    @GetMapping
    public List<Post> getpost() {
        return postApi.getAllPost();
    }
}
