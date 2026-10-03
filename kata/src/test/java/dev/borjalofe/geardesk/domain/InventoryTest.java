package dev.borjalofe.geardesk.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class InventoryTest {
  @Test
  void addAndListKinds() {
    Inventory inv = new Inventory();
    GearKind mic = inv.addKind("Microphone");
    assertEquals("Microphone", mic.name());
    assertEquals(1, inv.listKinds().size());
    assertTrue(inv.findKind(mic.id()).isPresent());
  }
}
