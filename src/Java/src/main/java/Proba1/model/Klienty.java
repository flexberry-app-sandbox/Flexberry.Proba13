package Proba1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISProba1Клиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаимЗаказа")
    private String наимзаказа;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "АдресПоставщика")
    private String адреспоставщика;

    @Column(name = "РасчетСчет")
    private Integer расчетсчет;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаимЗаказа() {
      return наимзаказа;
    }

    public void setНаимЗаказа(String наимзаказа) {
      this.наимзаказа = наимзаказа;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getАдресПоставщика() {
      return адреспоставщика;
    }

    public void setАдресПоставщика(String адреспоставщика) {
      this.адреспоставщика = адреспоставщика;
    }

    public Integer getРасчетСчет() {
      return расчетсчет;
    }

    public void setРасчетСчет(Integer расчетсчет) {
      this.расчетсчет = расчетсчет;
    }


}