//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import {inject, observer} from "mobx-react";

const WithStoresHoc = (Wrapped, stores: Array<string>) => {

    let WithStores = (inject(...stores)(observer(Wrapped)));

    return (
        <React.Fragment>
            <WithStores/>
        </React.Fragment>
    );
}

export default WithStoresHoc;
