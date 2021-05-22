import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import config from '../../config';

interface StripeCheckoutButtonProps {
    price: number
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ price }) => {
    const priceForStripe = price * 100;

    const onToken = (token: Token) => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={config.stripe.publishableKey}
        />
    );
}

export default StripeCheckoutButton;