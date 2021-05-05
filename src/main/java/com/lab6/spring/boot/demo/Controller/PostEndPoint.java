package com.lab6.spring.boot.demo.Controller;

import com.lab6.spring.boot.demo.api.PostApi;
import com.lab6.spring.boot.demo.domain.Post;
import dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
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
    public List<Post> getPost() {
        return postApi.getAllPost();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto){
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return postApi.addPost(post);
    }
}
