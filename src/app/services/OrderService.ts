import axios from "axios";
import { serverApi } from "../../lib/config";
import { Order, OrderInquiry, OrderItemInput, OrderUpdateInput } from "../../lib/types/order";
import { cardItem } from "../../lib/types/search";

class OrderService {
    private readonly path: string;

    constructor() {
        this.path = serverApi;
    }

    public async createOrder(input: cardItem[]): Promise<Order> {
        try {
            const orderItems: OrderItemInput[] = input.map((cardItem: cardItem) => {
                return {
                    itemQuantity: cardItem.quantity,
                    itemPrice: cardItem.price,
                    productId: cardItem._id,
                };
            });

            const url = this.path + "/order/create";
            const result = await axios.post(url, orderItems,
                { withCredentials: true });

            console.log(" createOrder: ", result);
            return result.data
        }
        catch (err) {
            console.log("ERROR, createOrder", err)
            throw err;
        }
    }

    public async getMyOrders(input: OrderInquiry): Promise<Order[]> {
        try {
            //axios.dafault.withcredentials = true; 
            const url = `${this.path}/order/all`;
            const query = `?page=${input.page}&limit=${input.limit}&orderStatus=${input.orderStatus}`

            const result = await axios.get(url + query,
                { withCredentials: true });

            console.log(" getMyOrders: ", result);
            return result.data
        }
        catch (err) {
            console.log("ERROR, getMyOrders", err)
            throw err;
        }
    }

    public async updateOrder(input: OrderUpdateInput): Promise<Order> {
        try {
            const url = `${this.path}/order/update`;
            const result = await axios.post(
                url, input,
                { withCredentials: true }
            );
            console.log("Result: ", result)

            return result.data
        }
        catch (err) {
            console.log("ERROR, updateOrder", err)
            throw err;
        }
    }
}

export default OrderService