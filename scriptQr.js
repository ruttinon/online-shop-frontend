async function generateQRCode() {
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    if (!phone || !amount) {
        alert("❌ กรุณาใส่เบอร์โทรและจำนวนเงิน");
        return;
    }

    try {
        const response = await fetch(`/generate-payment-qr?phone=${phone}&amount=${amount}`);
        const data = await response.json();
        document.getElementById("qr-code").src = data.qrCode;
    } catch (error) {
        console.error("❌ เกิดข้อผิดพลาด:", error);
    }
}
