<?php

session_start();
$token = $_REQUEST['token'] ?? filter_input(INPUT_POST, 'token', FILTER_SANITIZE_SPECIAL_CHARS);
if ($token && session_status() === PHP_SESSION_ACTIVE && $token && $token === $_SESSION['token']) {
    
    
        if(
          (isset($_REQUEST['name']) && !empty($_REQUEST['name']))&&
          (isset($_REQUEST['email']) && !empty($_REQUEST['email']))&&
          (isset($_REQUEST['service']) && !empty($_REQUEST['service']))&&
          (isset($_REQUEST['pn']) && !empty($_REQUEST['pn']))		  
            ) {                
          if(preg_match('/^[0-9]{9,14}+$/', $_REQUEST['pn'])) {
        
        
           
        $_SESSION['superhero'] = $_REQUEST['name'] ;
    	$name = $_REQUEST['name'] ;
    	$email = $_REQUEST['email'] ;
    	$subject = 'New Signup Request Dissertation US';
    	$service = $_REQUEST['service'] ;
    	$phone = $_REQUEST['pn'] ;
        $message = $_REQUEST['message'] ;

        $email_from = $email;
        $email_to = 'rizwansarwarwar@gmail.com';//replace with your email

        $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Service: ' . $service . "\n\n" . 'Phone: ' . $phone . "\n\n" . 'Message: ' . $message;
	    $success = mail($email_to, $subject, $body, 'From: <' . $email_from . '>');
		
		
		
        unset($_SESSION['token']);
        

        header("Location: thanks.html");
            die;
        }else{
            header("Location: index.html");
        }

        }else{
            header("Location: index.html");
        }
		
        } else {
			header("Location: index.html");          
            exit;
        }
	
?>
