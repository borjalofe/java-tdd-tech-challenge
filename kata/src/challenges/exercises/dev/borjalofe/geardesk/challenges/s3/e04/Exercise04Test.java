package dev.borjalofe.geardesk.challenges.s3.e04;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class Exercise04Test {
  @Test
  void implementsConcern() {
    assertTrue(Exercise04.done(), "Implement: Delete GearKind; reject if kits reference it");
  }
}
