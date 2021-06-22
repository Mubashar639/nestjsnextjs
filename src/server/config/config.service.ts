/* eslint-disable max-classes-per-file */
import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsOptional } from 'class-validator';
import * as dotenv from 'dotenv';

export class EnvConfig {
  @IsOptional()
  public readonly NODE_ENV?: string;

  @IsNotEmpty()
  public readonly DATABASE_URL!: string;

  @IsNotEmpty()
  public readonly FRONT_END_URL!: string;

  @IsNotEmpty()
  public readonly AWS_BUCKET_NAME!: string;

  @IsNotEmpty()
  public readonly PUBLIC_URL!: string;

  @IsNotEmpty()
  public readonly AWS_REGION!: string;

  @IsNotEmpty()
  public readonly AWS_ACCESS_KEY!: string;

  @IsNotEmpty()
  public readonly AWS_ACCESS_SECRET!: string;

  @IsNotEmpty()
  public readonly STRIPE_PRIVATE_KEY!: string;

  @IsNotEmpty()
  public readonly PAYMENT_AMOUNT!: number;
}

@Injectable()
export class ConfigService extends EnvConfig {
  public constructor() {
    super();
    dotenv.config();
    const baseEnvConfig = ConfigService.addToEnv(process.env, new EnvConfig());
    const envConfigWithOverrides = ConfigService.addToEnv({}, baseEnvConfig);
    Object.assign(this, envConfigWithOverrides);
  }

  public get isProduction() {
    return this.NODE_ENV === 'production';
  }

  private static addToEnv(variables: { [key: string]: any }, envConfig: EnvConfig): EnvConfig {
    return Object.keys(variables).reduce((config: EnvConfig, key: string) => {
      config[key] = variables[key] || config[key];
      return config;
    }, envConfig);
  }
}
