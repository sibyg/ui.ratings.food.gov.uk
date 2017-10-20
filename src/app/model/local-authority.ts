export class LocalAuthority {
  id: number;
  code: string;
  regionName: string;
  establishmentCount: number;
  lastPublishedDate: string;
}


export class LocalAuthorities {
  localAuthorities: LocalAuthority[];
}