package com.indireed.applicationservice;

import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;

import javax.servlet.http.HttpServletRequest;
import java.util.UUID;

public class Utility {
    public static UUID getCurrentUserId(HttpServletRequest request) {
        KeycloakAuthenticationToken principal = (KeycloakAuthenticationToken) request.getUserPrincipal();
       return UUID.fromString(principal.getAccount().getKeycloakSecurityContext().getToken().getPreferredUsername());
    }
}
