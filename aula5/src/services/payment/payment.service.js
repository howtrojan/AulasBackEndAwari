import axios from "axios";

class PaymentService {
  async processPayment() {
    const paymentData = {
      customer: {
        name: "André",
        email: "andre.braga.asb@gmail.com",
        tax_id: "02706666056"
      },
      shipping: {
        address: {
          street: "Rua Barão do Rio Branco",
          number: "1340",
          city: "Presidente Prudente",
          region_code: "SP",
          country: "BRA",
          postal_code: "19015010",
          locality: "Centro"
        }
      },
      reference_id: "1",
      items: [
        {
          name: "Item",
          quantity: 1,
          unit_amount: 100
        }
      ]
    };

    try {
      const response = await axios.post(
        'https://sandbox.api.pagseguro.com/orders',
        paymentData,
        {
          headers: {
            'Authorization': 'Bearer c61e3978-0e4f-4b92-9fa2-3e831e024548fef676d546ecb788834567b920bcc7803d48-3dd8-47b6-95cb-2d634f7fb0a1',
            'accept': '*/*',
            'content-type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao processar pagamento:", error.response ? error.response.data : error.message);
      throw error;
    }
  }
}

export default new PaymentService();
