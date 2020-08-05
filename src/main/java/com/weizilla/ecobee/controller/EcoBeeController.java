package com.weizilla.ecobee.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class EcobeeController {

    @GetMapping("/api/public")
    public Map<String, Object> publicApi() {
        return Map.of("hello", "public");
    }

    @GetMapping("/api/private")
    public Map<String, Object> privateApi() {
        return Map.of("hello", "private");
    }

    @GetMapping("/api/private-scoped")
    public Map<String, Object> scopedApi() {
        return Map.of("hello", "scoped");
    }
}
