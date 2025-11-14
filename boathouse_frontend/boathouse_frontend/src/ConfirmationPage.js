import { useEffect } from 'react';

const ConfirmationPage = ({ userEmail, bookingDetails }) => {
  useEffect(() => {
    const sendConfirmationEmail = async () => {
      try {
        const response = await fetch('/api/send-confirmation-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: userEmail,
            bookingDetails
          })
        });
        if (!response.ok) {
          console.error('Failed to send confirmation email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };

    sendConfirmationEmail();
  }, [userEmail, bookingDetails]);

  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your booking. A confirmation email has been sent to {userEmail}.</p>
      <p>Booking Details: {JSON.stringify(bookingDetails)}</p>
    </div>
  );
};

export default ConfirmationPage;
