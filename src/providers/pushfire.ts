import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

declare var FCMPlugin: any;

interface FCMPlugin {
  initializeRemoteConfig: (firstParam: any, secondParam: any) => void;
  getStringValueForKey: (firstParam: any, secondParam: any, thirdParam: any) => void;
  getToken: (firstParam: any, secondParam: any) => void;
  subscribeToTopic: (firstParam: string) => void;
  unsubscribeFromTopic: (firstParam: string) => void;
  onNotification: (firstParam: any, secondParam: any, thirdParam: any) => void;
  logEvent: (firstParam: any, secondParam: any, thirdParam: any, fourthParam: any) => void;
  setUserId: (firstParam: any, secondParam: any, thirdParam: any) => void;
  setUserProperty: (firstParam: any, secondParam: any, thirdParam: any, fourthParam: any) => void;
}



@Injectable()
export class Pushfire {
  constructor(private notificationManager: Events) {
  }
  //Remote Config
  initializeRemoteConfig() {
    FCMPlugin.initializeRemoteConfig((result) => { }, (error) => { });
  }

  getStringValueForKey(remoteConfigKey: string, successCallback: any, errorCallback: any) {
    FCMPlugin.getStringValueForKey(remoteConfigKey, successCallback, errorCallback);
  }

  //Push notification
  configureFirebasePush() {
    try {
      FCMPlugin.getToken((token) => {
        console.log('received push token', token);
        this.registerNotification();
      }, (err) => {
        console.log('error retrieving token: ' + err);
      }
      );
    }
    catch (e) {

    }
  }
  // Subscribe topic for Push
  subscribeTopic(topicName: string) {
    try {
      FCMPlugin.subscribeToTopic(topicName);
    }
    catch (e) {

    }
  }
  unsubscribeTopic(topicName: string) {
    FCMPlugin.unsubscribeFromTopic(topicName);
  }
  setUserId(userId: string) {
    FCMPlugin.setUserId(userId, (success) => {
      console.log("set userId Success");
    }, (error) => {
      console.log("set userId Failure");
    });
  }

  setUserProperty(propertyString: string, propertyName: string) {
    FCMPlugin.setUserProperty(propertyString, propertyName, (success) => {
      console.log("Set User Property Success");
    }, (error) => {
      console.log("Set User Property Failure");
    });
  }

  logEvent(key: string, value: string) {
    FCMPlugin.logEvent(key, value, (success) => {
      console.log("Event Success");
    }, (error) => {
      console.log("Event Failure");
    });
  }

  registerNotification() {
    FCMPlugin.onNotification((data) => {
      this.notificationManager.publish('app:pushnotify', data);
    }, (msg) => {
      console.log('onNotification callback successfully registered: ' + msg);
    }, (err) => {
      console.log('Error registering onNotification callback: ' + err);
    }
    );
  }
}

