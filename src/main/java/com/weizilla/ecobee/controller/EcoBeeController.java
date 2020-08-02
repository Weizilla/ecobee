package com.weizilla.ecobee.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class EcoBeeController {

    @GetMapping("/tacos")
    public Map<String, Object> index(@RequestParam("input") String hello) {
        return Map.of("message", hello);
    }
}
