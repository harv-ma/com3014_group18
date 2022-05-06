package com.indireed.userservice;

import org.jboss.resteasy.client.jaxrs.ResteasyClientBuilder;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public
class KeycloakClientConfig {
    @Value("${keycloak.resource}")
    private static String clientId;
    @Value("${keycloak.auth-server-url}")
    private static String authUrl;
    @Value("${keycloak.realm}")
    private static String realm;

    public KeycloakClientConfig(){}

    public static Keycloak getKeyCloakInstance() {
        return KeycloakBuilder.builder()
                .serverUrl(authUrl)
                .clientId(clientId)
                .realm(realm)
                .grantType(OAuth2Constants.PASSWORD)
                .resteasyClient(new ResteasyClientBuilder()
                        .connectionPoolSize(10)
                        .build())
                .build();
    }
}