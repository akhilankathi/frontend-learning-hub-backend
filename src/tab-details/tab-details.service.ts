import { Injectable } from '@nestjs/common';
import { TAB_DETAILS } from 'src/constants/tab-details';

@Injectable()
export class TabDetailsService {
    private tabDetails:any ;
    constructor(){
        this.tabDetails = TAB_DETAILS
    }

    getTabDetails(){
    return this.tabDetails
    }
}
