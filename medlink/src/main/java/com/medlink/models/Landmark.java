package com.medlink.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Landmark {
    private int id;
    private String name;
    private String image;
    private String description;

    // Getters and Setters
}

