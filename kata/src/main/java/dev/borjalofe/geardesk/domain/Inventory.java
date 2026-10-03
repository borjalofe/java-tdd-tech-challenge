package dev.borjalofe.geardesk.domain;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/** In-memory inventory of GearKinds (reference instructor domain). */
public final class Inventory {
  private final List<GearKind> kinds;

  public Inventory() {
    this.kinds = new ArrayList<>();
  }

  public GearKind addKind(String name) {
    GearKind kind = GearKind.create(name);
    kinds.add(kind);
    return kind;
  }

  public List<GearKind> listKinds() {
    return Collections.unmodifiableList(kinds);
  }

  public Optional<GearKind> findKind(UUID id) {
    return kinds.stream().filter(k -> k.id().equals(id)).findFirst();
  }

  public GearKind updateKind(UUID id, String name) {
    for (int i = 0; i < kinds.size(); i++) {
      if (kinds.get(i).id().equals(id)) {
        GearKind updated = kinds.get(i).withName(name);
        kinds.set(i, updated);
        return updated;
      }
    }
    throw new IllegalArgumentException("unknown kind");
  }
}
