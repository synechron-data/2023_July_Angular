import { BehaviorSubject, Observable } from "rxjs";

export class PubSubService {
    private subjects: {[key:string]: BehaviorSubject<any>} = {};

    publish(eventName: string) {
        this.subjects[eventName] = this.subjects[eventName] || new BehaviorSubject<any>(null);
        this.subjects[eventName].next(null);
    }

    on(eventName: string): Observable<any> {
        this.subjects[eventName] = this.subjects[eventName] || new BehaviorSubject<any>(null);
        return this.subjects[eventName].asObservable();
    }
}