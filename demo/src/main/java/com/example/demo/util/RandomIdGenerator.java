package com.example.demo.util;

import java.util.Random;

public class RandomIdGenerator {

    public static String generateId(String input1, String input2) {
        Random random = new Random();
        int randomId = 10000000 + random.nextInt(90000000); // Generate an 8-digit number
        return String.valueOf(randomId);
    }

//    public static void main(String[] args) {
//        RandomIdGenerator generator = new RandomIdGenerator();
//        String id = generator.generateId("example1", "example2");
//        System.out.println("Generated ID: " + id);
//    }
}