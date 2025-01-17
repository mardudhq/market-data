import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyRegistryModule } from 'src/company-registry/company-registry.module';
import { DataFeedService } from './data-feed.service';
import {
  RealtimeStockData,
  RealtimeStockDataSchema,
} from './schemas/realtime-stock-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RealtimeStockData.name,
        schema: RealtimeStockDataSchema,
      },
    ]),
    CompanyRegistryModule,
  ],
  providers: [DataFeedService],
})
export class DataFeedModule {}
