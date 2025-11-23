function payFixed(amount) {
  let upiId = "ghorha@ybl";
  let name = "Ravi Patel";

  // UPI Payment Link
  let url = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&am=${amount}&cu=INR`;

  window.location.href = url;
}
