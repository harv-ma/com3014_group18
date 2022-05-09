package com.indireed.userservice.config;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class MessagingConfig {
    public final static String USER_JOB_DELETION_QUEUE = "user_job_deletion_queue";
    public final static String USER_APPLICATION_DELETION_QUEUE = "user_application_deletion_queue";

    @Bean
    public Queue userJobDeletionQueue() {
        return new Queue(USER_JOB_DELETION_QUEUE, true);
    }


    @Bean
    public Queue userApplicationDeletionQueue() {
        return new Queue(USER_APPLICATION_DELETION_QUEUE, true);
    }

    @Bean
    public MessageConverter converter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate template(ConnectionFactory connectionFactory) {
        RabbitTemplate template = new RabbitTemplate(connectionFactory);
        template.setMessageConverter(converter());
        return template;
    }
}
