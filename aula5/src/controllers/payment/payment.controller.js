import PaymentService from "../../services/payment/payment.service.js";

class PaymentController {
    async payment(req, res) {        
        const response = await(PaymentService.processPayment(req.body));        
        return res.status(200).json(response);
    }
}

export default new PaymentController();