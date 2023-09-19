import PriceTable from "../PriceTable/PriceTable";
import {GiWeightLiftingUp,GiStrongMan } from "react-icons/gi";
import {CgGym } from "react-icons/cg";


const PriceTables = () => {
   const gymPricingData = [
      {
          id: 1,
          name: "Basic",
          price: "20",
          icon:<CgGym/>,
          features: [
              "Access to basic gym equipment",
              "Locker facilities",
              "Locker facilities",
              "Locker facilities",
              "Locker facilities",
              "Open gym hours: 9am-7pm"
          ]
      },
      {
          id: 2,
          name: "Standard",
          price: "40",
          icon:<GiWeightLiftingUp/>,
          features: [
              "Access to all gym equipment",
              "Locker facilities + Personal locker",
              "Open gym hours: 6am-10pm",
              "Open gym hours: 6am-10pm",
              "Open gym hours: 6am-10pm",
              "2 free group classes/month"
          ]
      },
      {
          id: 3,
          name: "Premium",
          price: "60",
          icon:<GiStrongMan/>,
          features: [
              "Access to all gym equipment with no wait time",
              "Premium locker facilities",
              "Open gym hours: 24/7",
              "Unlimited group classes",
              "1 free personal training session/month"
          ]
      }
  ];
  
   return (
      <div className="container px-8 mx-auto mb-20">
         <h2 className="text-5xl font-bold text-center uppercase mt-20 mb-4">Our Pricing Plans</h2>
         <p className="text-center font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod doloremque accusamus distinctio <br/>atque optio sit laboriosam nisi error culpa aspernatur.</p>
         <div className="mt-5 grid grid-cols-3 gap-6">
            {
               gymPricingData.map(priceTable=><PriceTable key={priceTable.id} priceTable={priceTable}></PriceTable>)
            }
         </div>
      </div>
   );
};

export default PriceTables;