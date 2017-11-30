var amazonOrders = [
    {
        "order_id": 1,
        "order_placed_date": "01-01-2017",
        "order_delivery_date": "05-01-2017",
        "tracking_id": "AWB76578976A",
        "delivery_executive": "Samir",
        "delivery_executive_phone": "+91765687657",
        "shipped_from_warehouse": "Bellandur, Bangalore",
        "total_order_amount": 7500,
        "payment_mode": "prepaid",
        "customer_details": {
            "customer_id": "C1",
            "customer_name": "Satish Kumar",
            "customer_address": "Door 1, 6th Main, Yeswantput, Bangalore",
            "customer_delivery_preference": "weekend",
            "customer_prime_status": "prime",
            "customer_email": "abc@gmail.com",
            "customer_phone_number": "+919999999999"
        },
        "product_ordered": [
            {
                "product_id": "P1",
                "product_name": "Aerosmith Geyser 10L",
                "product_price": 7000,
                "quantity_ordered": 1,
                "product_weight": "5kg",
                "product_color": "white",
                "seller_details": {
                    "seller_id": "S1",
                    "seller_name": "Cloud sellers",
                    "seller_address": "Jalandhar",
                    "seller_rating": 4.5
                }
            },
            {
                "product_id": "P2",
                "product_name": "Laptop Fan",
                "product_price": 500,
                "quantity_ordered": 1,
                "product_weight": "100gm",
                "product_color": "black",
                "seller_details": {
                    "seller_id": "S2",
                    "seller_name": "IT Infotech",
                    "seller_address": "Rajkot",
                    "seller_rating": 4.0
                }
            }
        ]
    },
    {
        "order_id": 2,
        "order_placed_date": "02-02-2017",
        "order_delivery_date": "05-01-2017",
        "tracking_id": "AWB754535355",
        "delivery_executive": "Raju",
        "delivery_executive_phone": "+9153954554",
        "shipped_from_warehouse": "Kormangala, Bangalore",
        "total_order_amount": 8700,
        "payment_mode": "prepaid",
        "customer_details": {
            "customer_id": "C2",
            "customer_name": "Ramesh Kumar",
            "customer_address": "Door 1, 6th Main, Kr Puram, Bangalore",
            "customer_delivery_preference": "weekend",
            "customer_prime_status": "prime",
            "customer_email": "xyz@gmail.com",
            "customer_phone_number": "+919848545845"
        },
        "product_ordered": [
            {
                "product_id": "P2",
                "product_name": "Nivea Moisturiser",
                "product_price": 700,
                "quantity_ordered": 2,
                "product_weight": "2kg",
                "product_color": "white",
                "seller_details": {
                    "seller_id": "S2",
                    "seller_name": "Cloud sellers",
                    "seller_address": "Jalandhar",
                    "seller_rating": 4.3
                }
            },
            {
                "product_id": "P3",
                "product_name": "Mobile ScreenSaver",
                "product_price": 500,
                "quantity_ordered": 1,
                "product_weight": "100gm",
                "product_color": "black",
                "seller_details": {
                    "seller_id": "S3",
                    "seller_name": "IT Infotech",
                    "seller_address": "Bansankari",
                    "seller_rating": 4.0
                }
            }
        ]
    }
]


var displayJsonOnConsole = function (amazonOrders) {
    for(orders in amazonOrders) {

        console.log(amazonOrders[orders].order_id);
        console.log(amazonOrders[orders].order_placed_date);
        console.log(amazonOrders[orders].order_delivery_date);
        console.log(amazonOrders[orders].tracking_id);
        console.log(amazonOrders[orders].delivery_executive);
        console.log(amazonOrders[orders].delivery_executive_phone);
        console.log(amazonOrders[orders].shipped_from_warehouse);
        console.log(amazonOrders[orders].total_order_amount);
        console.log(amazonOrders[orders].payment_mode);

        console.log(amazonOrders[orders].customer_details.customer_id);
        console.log(amazonOrders[orders].customer_details.customer_name);
        console.log(amazonOrders[orders].customer_details.customer_address);
        console.log(amazonOrders[orders].customer_details.customer_delivery_preference);
        console.log(amazonOrders[orders].customer_details.customer_prime_status);
        console.log(amazonOrders[orders].customer_details.customer_email);
        console.log(amazonOrders[orders].customer_details.customer_phone_number);


        for (k in amazonOrders[orders].product_ordered) {
            console.log("product_id -" + amazonOrders[orders].product_ordered[k].product_id);
            console.log("product_name -" + amazonOrders[orders].product_ordered[k].product_name);
            console.log("product_price -" + amazonOrders[orders].product_ordered[k].product_price);
            console.log("quantity_ordered -" + amazonOrders[orders].product_ordered[k].quantity_ordered);
            console.log("product_weight -" + amazonOrders[orders].product_ordered[k].product_weight);
            console.log("product_color -" + amazonOrders[orders].product_ordered[k].product_color);
        }
    }
}

// Get all Orders functions, takes input as element Id where output has to be shown
// Traverses Amazon orders JSON object and prints details like an order slip

function printOrderDetailsByIndex(orders) {

    var totalPrice = 0;
    var output = "";

    // Loop to traverse through Orders

    //Order Id title
    output = output.concat("<h3> Order Id: ");
    output = output.concat(amazonOrders[orders].order_id);
    output = output.concat("</h3>");
//    output = output.concat("<br>");
    output = output.concat("<h4>Email ID: ");
    output = output.concat(amazonOrders[orders].customer_details.customer_email);
    output = output.concat("</h4>");

    // Order date
    output = output.concat("<b>Order Date:</b>");
    output = output.concat(amazonOrders[orders].order_placed_date);
    output = output.concat("<br>");

    // Tracker Id
    output = output.concat("<b>Tracker Id:</b> ");
    output = output.concat(amazonOrders[orders].tracking_id);
    output = output.concat("<br>");
    output = output.concat("<br>");

    // From Shipment details
    output = output.concat("<b>From:</b><br>");
    output = output.concat("Amazon Warehouse, " + amazonOrders[orders].shipped_from_warehouse);
    output = output.concat("<br>");
    output = output.concat("<br>");

    // Customer delivery address
    output = output.concat("<b>To:</b><br>");
    output = output.concat(amazonOrders[orders].customer_details.customer_name);
    output = output.concat("<br>");
    output = output.concat(amazonOrders[orders].customer_details.customer_address);
    output = output.concat("<br>");

    output = output.concat("<b>Email:</b>");
    output = output.concat(amazonOrders[orders].customer_details.customer_email);
    output = output.concat("<br>");

    output = output.concat("<b>Phone:</b>");
    output = output.concat(amazonOrders[orders].customer_details.customer_phone_number);
    output = output.concat("<br>");
    output = output.concat("<br>");


    output = output.concat("<b> Products Ordered: </b><br>");
    output = output.concat("<hr width='40%' align='left'>");

    for (k in amazonOrders[orders].product_ordered) {

        // Product details
        output = output.concat(amazonOrders[orders].product_ordered[k].product_id);
        output = output.concat("&nbsp; &nbsp;");
        output = output.concat(amazonOrders[orders].product_ordered[k].product_name);

        output = output.concat("<br>");
        output = output.concat("<b>Qty:</b> ");
        output = output.concat(amazonOrders[orders].product_ordered[k].quantity_ordered);
        output = output.concat(", ");
        output = output.concat("<b>Price:</b> ");
        output = output.concat(amazonOrders[orders].product_ordered[k].product_price);

        // Calculate sum of price

        totalPrice = totalPrice + amazonOrders[orders].product_ordered[k].product_price;

        // Seller Details
        output = output.concat(", ");
        output = output.concat("<b> Seller Name: </b>");
        output = output.concat(amazonOrders[orders].product_ordered[k].seller_details.seller_name);
        output = output.concat("<br>");
        output = output.concat("<br>");

    }
        // Delivery date
        output = output.concat("<hr width='40%' align='left'>");
        output = output.concat("<b> Delivery Date: </b>");
        output = output.concat(amazonOrders[orders].order_delivery_date);

        // Total Price
        output = output.concat("&nbsp; &nbsp;");
        output = output.concat("<b>Total Price: </b>");
        output = output.concat(totalPrice);
        output = output.concat("<hr width='40%' align='left'>");


    return output;
}

 function getAllOrders(elementId) {

    var output = "";

    for(orders in amazonOrders) {

        console.log(orders);
        output = output.concat(printOrderDetailsByIndex(orders))

    }

     document.getElementById(elementId).innerHTML = output;

}

// takes elementId and as input
function getOrderDetailsBasedOnOrderID(elementId, orderId) {
    try {
    document.getElementById(elementId).innerHTML = printOrderDetailsByIndex(orderId - 1);
    } catch (err) {
    document.getElementById(elementId).innerHTML = "Order Id does not match";
    }
}

function getOrderBasedOnEmailID(elementId, emailID){
   // document.getElementById(elementId).innerHTML = printOrderDetailsByIndex(emailID);
    for(orders in amazonOrders) {
        if(amazonOrders[orders].customer_details.customer_email == emailID){
            document.getElementById(elementId).innerHTML = printOrderDetailsByIndex(orders);
        }else {
            document.getElementById(elementId).innerHTML = "Email Id does not match";
        }
    }

}