package dev.borjalofe.geardesk.domain;

import java.util.Objects;
import java.util.UUID;

/** Immutable GearKind (AV category). */
public final class GearKind {
  private final UUID id;
  private final String name;

  public GearKind(UUID id, String name) {
    this.id = Objects.requireNonNull(id);
    this.name = Objects.requireNonNull(name);
  }

  public static GearKind create(String name) {
    return new GearKind(UUID.randomUUID(), name);
  }

  public GearKind withName(String newName) {
    return new GearKind(id, newName);
  }

  public UUID id() {
    return id;
  }

  public String name() {
    return name;
  }
}
