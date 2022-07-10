export class ResponseTransformer<EntityResponse, Entity> {
  constructor(
    private entityResponse: { new (entity: Entity): EntityResponse },
  ) {}

  item(entity: Entity) {
    return new this.entityResponse(entity);
  }

  items(entities: Entity[]) {
    const response = [];
    if (entities) {
      for (const entity of entities) {
        response.push(this.item(entity));
      }
    }
    return response;
  }
}
