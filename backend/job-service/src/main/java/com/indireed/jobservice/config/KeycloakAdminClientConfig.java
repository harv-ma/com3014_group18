package com.indireed.jobservice.config;


import org.keycloak.admin.client.Keycloak;

public class KeycloakAdminClientConfig {

    public static Keycloak getKeyCloak() {
        return Keycloak.getInstance("http://keycloak:8080",
                "master",
                "admin",
                "admin",
                "admin-cli");
    }
}