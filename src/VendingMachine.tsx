import { useState } from "react";

function VendingMachine() {
  const [selectedSnack, setSelectedSnack] = useState<string | null>(null);

  const handleSelectSnack = (snack: string) => {
    setSelectedSnack(snack);
  };

  const vendingMachineStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/colored-realistic-design-snacks-vending-machine-with-electronic-control-panel-isolated_1284-30751.jpg?t=st=1724530442~exp=1724534042~hmac=f804f9674f888fcc5cb6ce92d4d4ad5b5f79fe2617b4ad34ee199180cdb4a65f&w=740')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
  };

  return (
    <div style={vendingMachineStyle}>
      <div
        id="snack-container"
        className="snack-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
        }}
      >
        <div>
          <img
            src="/Candy.png"
            alt="Candy"
            className="snack-image"
            style={{ width: "100px", height: "100px" }}
            onClick={() => handleSelectSnack("You have chosen Candy!")}
          />
          <img
            src="/Soda.png"
            alt="Soda"
            className="snack-image"
            style={{ width: "100px", height: "100px" }}
            onClick={() => handleSelectSnack("You have chosen Soda!")}
          />
          <img
            src="/Chips.png"
            alt="Chips"
            className="snack-image"
            style={{ width: "100px", height: "100px" }}
            onClick={() => handleSelectSnack("You have chosen Chips!")}
          />
        </div>
        {selectedSnack && (
          <div
            className="selected-snack"
            style={{ color: "black", fontSize: "2rem", marginBottom: "10px" }}
          >
            <p>{selectedSnack}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VendingMachine;
