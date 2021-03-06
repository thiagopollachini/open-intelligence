import React, {Component} from "react";
import PlateTraining from "./PlateTraining/PlateTraining";
import PersonTraining from "./PersonTraining/PersonTraining";
import ErrorComponent from "../../components/NetworkErrorComponent/ErrorComponent";

class Training extends Component<any, any> {

  componentDidMount(): void {
  }

  render() {
    return (
      <div>
        <ErrorComponent/>
        <div className="mt-2 mr-2 ml-2">
          <PlateTraining/>
        </div>
        <div className="mt-2 mr-2 ml-2">
          <PersonTraining/>
        </div>
      </div>
    )
  }
}


export default Training;
