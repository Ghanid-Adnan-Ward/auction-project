// // CarListing.js

// import React from "react";
// import { Container, Row } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection/CommonSection";
// import carData from "../assets/data/carData";
// import Item from "../components/UI/Item/Item";
// import Item3 from "../components/UI/Item/Item3";

// const CarListing = () => {
//   const selectedCar = carData[0]; // اختيار السيارة المحددة للمزايدة

//   return (
//     <Helmet title="Cars">
//       <CommonSection title="السيارات" />
//       <section>
//         <Container>
//           <Row>
//             <Item3 item={selectedCar} key={selectedCar.id} />
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarListing;
import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
 import Item3 from "../components/UI/Item/Item3";
import carData from '../assets/data/carData'
const CarListing = () => {
  // const handleBidSubmit = (bid, itemId) => {
  //   // Update auction status for the specific item
  //   const updatedCarData = carData.map((item) => {
  //     if (item.id === itemId) {
  //       return { ...item, auctionActive: false }; // Setting auctionActive to false for the item
  //     }
  //     return item;
  //   });
  //   // Update carData with the modified auction status
  //   // You might want to use a state management solution like Redux for a large-scale application
  //   // Here, we are just updating the local variable carData
  //   // In a real-world application, you would update the state using setState or Redux dispatch
  //   carData = updatedCarData;
  // };

  return (
    <Helmet title="Cars">
      <CommonSection title="السيارات" />
      <Container>
        <Row>
          {carData.map((item) => (
            <Item3
              item={item}
              key={item.id}
              // handleBidSubmit={handleBidSubmit}  
            />
          ))}
        </Row>
      </Container>
    </Helmet>
  );
};

export default CarListing;