package com.indireed.jobservice.config;

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
    public final static String JOB_APPLICATION_QUEUE = "job_service_application_queue";
    public final static String JOB_DELETION_QUEUE = "job_service_deletion_queue";

    @Bean
    public Queue jobApplicationQueue() {
        return new Queue(JOB_APPLICATION_QUEUE, true);
    }


    @Bean
    public Queue jobDeletionQueue() {
        return new Queue(JOB_DELETION_QUEUE, true);
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
