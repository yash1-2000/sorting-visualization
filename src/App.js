import React from "react";
import Sorting from "./sorting.jsx";
import {
  Totalprovider,
  Arrayprovider,
  Speedprovider,
  Disableprovider,
} from "./context/contexts";

function App() {
  return (
    <div>
      <Disableprovider>
        <Totalprovider>
          <Speedprovider>
            
            <Arrayprovider>
              <Sorting />
            </Arrayprovider>
           
          </Speedprovider>
        </Totalprovider>
        </Disableprovider>
      
    </div>
  );
}

export default App;
