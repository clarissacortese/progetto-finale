import "./hero.css";

export default function Hero() {
  return (
    <div className="px-4 py-5 text-center container-fluid background">
      <div className="col-lg-6 mx-auto hero">
        <h1 className="display-5 fw-bold">VegTables</h1>
        <p className="lead mx-2">
          Thanks to VegTable you can easily and quickly search for the best
          vegetarian recipes that will perfectly suit your needs.
        </p>
      </div>
    </div>
  );
}
