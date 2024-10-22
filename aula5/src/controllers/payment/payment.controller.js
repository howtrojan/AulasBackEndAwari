import PaymentService from "../../services/payment/payment.service.js";

class PaymentController {
    async payment(req, res) {
        const response = await(PaymentService.processPayment());
        return res.status(200).json(response);
    }
}

export default new PaymentController();