// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface CdkEcsGameServersProps {
  // Define construct properties here
}

export class CdkEcsGameServers extends Construct {

  constructor(scope: Construct, id: string, props: CdkEcsGameServersProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkEcsGameServersQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
