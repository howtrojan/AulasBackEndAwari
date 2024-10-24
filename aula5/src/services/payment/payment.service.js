import axios from "axios";

class PaymentService {
  async processPayment(input) {
    const paymentData = this.mountPaymentbody(input);
    const url = `${process.env.PAYMENT_GATEWAY_URL}/orders`;
    const token = process.env.PAYMENT_GATEWAY_TOKEN;
    try {
      const response = await axios.post(url, paymentData, {
        headers: {
          Authorization: token,
          accept: "*/*",
          "content-type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Erro ao processar pagamento:", {
          status: error.response.status,
          data: error.response.data,
        });
      } else {
        console.error("Erro na comunicação:", error.message);
      }
      throw error;
    }
  }

  mountPaymentbody = (body) => {
    const unit_amount = body.item.price * 100;
    const reference_id = Math.floor(Math.random().toString().replace(".", ""));
    return {
      customer: {
        name: body.user.name,
        email: body.user.email,
        tax_id: body.user.document,
      },
      shipping: {
        address: {
          street: body.user.adress.street,
          number: body.user.adress.number,
          city: body.user.adress.city,
          region_code: body.user.adress.state,
          country: body.user.adress.country,
          postal_code: body.user.adress.zipcode,
          locality: body.user.adress.district,
        },
      },
      reference_id: `Compra - ${reference_id}`,
      items: [
        {
          name: body.item.name,
          quantity: body.item.quantity,
          unit_amount: unit_amount,
        },
      ],
      charges: [
        {
          amount: {
            value: unit_amount * body.item.quantity,
            currency: "BRL",
          },
          payment_method: {
            card: {
              holder: {
                name: body.payment.cardHolderName,
                tax_id: body.user.document,
              },
              number: body.payment.cardNumber,
              exp_month: body.payment.cardExpMonth,
              exp_year: body.payment.cardYear,
              security_code: body.payment.cardSecurityCode,
              store: true,
            },
            type: "CREDIT_CARD",
            installments: 1,
            capture: true,
            soft_descriptor: `Loja Teste - ${body.item.name}`,
          },
          reference_id: `Payment - ${reference_id}`,
          description: `Compra de um item - ${body.item.name}`,
        },
      ],
    };
  };
}

export default new PaymentService();
