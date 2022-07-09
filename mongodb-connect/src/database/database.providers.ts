import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from '../core/constants';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(
                DATABASE_CONNECTION
            ),
    },
];