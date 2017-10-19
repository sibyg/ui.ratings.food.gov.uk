import {Region} from '../model/region';
import {LocalAuthority} from "../model/local-authority";

export const REGIONS: Region[] = [
  {id: 1, name: 'NORTH'},
  {id: 2, name: 'SOUTH'},
  {id: 3, name: 'EAST'},
  {id: 4, name: 'WEST'}
];

export const LOCAL_AUTHORITES: LocalAuthority[] = [
  {id: 1, code: 'NL-A', regionName: 'NORTH', establishmentCount: 10, lastPublishedDate: '2017-10-19T18:52:16.675Z[UTC]'},
  {id: 2, code: 'NL-B', regionName: 'NORTH', establishmentCount: 15, lastPublishedDate: '2017-10-29T18:52:16.675Z[UTC]'},
  {id: 3, code: 'NL-C', regionName: 'NORTH', establishmentCount: 13, lastPublishedDate: '2017-10-12T18:52:16.675Z[UTC]'},
  {id: 4, code: 'NL-D', regionName: 'NORTH', establishmentCount: 5, lastPublishedDate: '2017-10-11T18:52:16.675Z[UTC]'},
];

export const LOCAL_AUTHORITY: LocalAuthority = {id: 1, code: 'NL-A', regionName: 'NORTH', establishmentCount: 10, lastPublishedDate: '2017-10-19T18:52:16.675Z[UTC]'};
