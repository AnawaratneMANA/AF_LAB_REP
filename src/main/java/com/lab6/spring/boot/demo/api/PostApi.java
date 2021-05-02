package com.lab6.spring.boot.demo.api;

import com.lab6.spring.boot.demo.domain.Post;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class PostApi {
    //Creating a Map to Hold the post.
    private Map<String, Post> posts;

    public PostApi(){
        this.posts = new HashMap();
    }

    public List<Post> getAllPost() {
        return new ArrayList<>(posts.values());
    }
}
