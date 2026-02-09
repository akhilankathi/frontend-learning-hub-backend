import {Injectable, Query } from '@nestjs/common';
import { LEARNING_DATA } from './../constants/learning-data';

@Injectable()
export class LearningDataService {
    private learningData: any
    constructor() {
        this.learningData = LEARNING_DATA
    }

    getLearningData(topic:string) {
        return this.learningData[topic]
    }
}
