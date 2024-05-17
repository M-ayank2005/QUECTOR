package net.javaguides.springboot.security.services;

// Java Program to Illustrate Creation Of
// Service implementation class



// Importing required classes
import  net.javaguides.springboot.entity.EmailDetails;
import java.io.File;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

// Annotation
@Service
// Class
// Implementing EmailService interface
public class EmailServiceImpl implements EmailService {

	@Autowired private JavaMailSender javaMailSender;

	@Value("${spring.mail.username}") private String sender;

	// Method 1
	// To send a simple email
	public String sendSimpleMail(EmailDetails details)
	{

		// Try block to check for exceptions
		try {

			// Creating a simple mail message
			SimpleMailMessage mailMessage
				= new SimpleMailMessage();

			// Setting up necessary details
			mailMessage.setFrom(sender);
			mailMessage.setTo(details.getRecipient());
			mailMessage.setText(details.getMsgBody());
			mailMessage.setSubject(details.getSubject());

			// Sending the mail
			javaMailSender.send(mailMessage);
			return "Mail Sent Successfully...";
		}

		// Catch block to handle the exceptions
		catch (Exception e) {
			return "Error while Sending Mail";
		}
	}

	// Method 2
	// To send an email with attachment
	public String
	sendMailWithAttachment(EmailDetails details)
	{
		// Creating a mime message
		MimeMessage mimeMessage
			= javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper;

		try {

			// Setting multipart as true for attachments to
			// be send
			mimeMessageHelper
				= new MimeMessageHelper(mimeMessage, true);
			mimeMessageHelper.setFrom(sender);
			mimeMessageHelper.setTo(details.getRecipient());
			mimeMessageHelper.setText(details.getMsgBody());
			mimeMessageHelper.setSubject(
				details.getSubject());

			// Adding the attachment
			FileSystemResource file
				= new FileSystemResource(
					new File(details.getAttachment()));

			mimeMessageHelper.addAttachment(
				file.getFilename(), file);

			// Sending the mail
			javaMailSender.send(mimeMessage);
			return "Mail sent Successfully";
		}

		// Catch block to handle MessagingException
		catch (MessagingException e) {

			// Display message when exception occurred
			return "Error while sending mail!!!";
		}
	}
	public String
	sendRegistrationMail(EmailDetails details)
	{
		// Creating a mime message
		MimeMessage mimeMessage
			= javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper;

		try {

			// Setting multipart as true for attachments to
			// be send
			mimeMessageHelper
				= new MimeMessageHelper(mimeMessage, true);

				String htmlMsg = "<!DOCTYPE html>" +
                "<html lang=\"en\">" +
                "<head>" +
                "<meta charset=\"UTF-8\">" +
                "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
                "<title>Registration Successful</title>" +
                "<style>" +
                "body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }" +
                ".container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }" +
                ".header { text-align: center; background-color: #4CAF50; color: white; padding: 10px 0; border-radius: 8px 8px 0 0; }" +
                ".content { margin: 20px 0; }" +
                ".content h2 { color: #333; }" +
                ".content p { line-height: 1.6; color: #666; }" +
                ".footer { text-align: center; margin: 20px 0 0; padding: 10px 0; background-color: #f4f4f4; border-radius: 0 0 8px 8px; }" +
                ".footer p { margin: 0; color: #999; }" +
                "</style>" +
                "</head>" +
                "<body>" +
                "<div class=\"container\">" +
                "<div class=\"header\">" +
                "<h1>Quecto</h1>" +
                "</div>" +
                "<div class=\"content\">" +
                "<h2>Registration Successful!</h2>" +
                "<p>Dear " + details.getMsgBody() + ",</p>" +
                "<p>Thank you for registering with Quecto. We are excited to have you on board.</p>" +
                "<p>Feel free to explore our services and make the most out of them.</p>" +
                "<p>If you have any questions, don't hesitate to reach out to our support team.</p>" +
                "<p>Best regards,</p>" +
                "<p>The Quecto Team</p>" +
                "</div>" +
                "<div class=\"footer\">" +
                "<p>&copy; 2024 Quecto. All rights reserved.</p>" +
                "</div>" +
                "</div>" +
                "</body>" +
                "</html>";



			mimeMessageHelper.setFrom(sender);
			mimeMessageHelper.setTo(details.getRecipient());
			mimeMessageHelper.setText(htmlMsg, true);
			mimeMessageHelper.setSubject(
				details.getSubject());

			

			// Sending the mail
			javaMailSender.send(mimeMessage);
			return "Mail sent Successfully";
		}

		// Catch block to handle MessagingException
		catch (MessagingException e) {

			// Display message when exception occurred
			return "Error while sending mail!!!";
		}
	}

}
