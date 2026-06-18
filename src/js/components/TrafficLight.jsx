import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "100vh", backgroundColor: "#1a1a1a"}}>
            <div style={{backgroundColor: "#333", padding: "20px", borderRadius: "15px", width: "100px", alignItems: "center"}}>
                
                <div 
                    onClick={() => setColor("red")}
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        backgroundColor: color === "red" ? "red" : "#550000",
                        margin: "10px auto",
                        cursor: "pointer",
                        boxShadow: color === "red" ? "0 0 20px red" : "none",
                        alignItems: "center"
                    }}
                />
                
                <div 
                    onClick={() => setColor("yellow")}
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        backgroundColor: color === "yellow" ? "yellow" : "#555500",
                        margin: "10px auto",
                        cursor: "pointer",
                        boxShadow: color === "yellow" ? "0 0 20px yellow" : "none",
                        alignItems: "center"
                    }}
                />
                
                <div 
                    onClick={() => setColor("green")}
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        backgroundColor: color === "green" ? "green" : "#005500",
                        margin: "10px auto",
                        cursor: "pointer",
                        boxShadow: color === "green" ? "0 0 20px green" : "none",
                        alignItems: "center"
                    }}
                />
            </div>
        </div>
    );
};

export default TrafficLight;