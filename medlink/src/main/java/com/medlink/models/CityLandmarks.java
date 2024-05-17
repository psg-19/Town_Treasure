package com.medlink.models;

// Landmark.java

// CityLandmarks.java
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
public class CityLandmarks {
    private String city;
    private List<Landmark> landmarks;

    // Getters and Setters
}
